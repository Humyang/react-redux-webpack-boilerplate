var express = require('express')
var path = require('path')
var compression = require('compression')



import React from 'react'
import {renderToString} from 'react-dom/server'
import {match,RouterContext} from 'react-router'
import routes from './src/modules/routes.js'

import configStore from './src/js/store/configureStore.js';

import { Provider } from 'react-redux';

var app = express()

var file_path = __dirname + '/www';

// 指定静态资源路径，例如 index.css
app.use(express.static('www',{index:false}))

app.use(compression());

// 所有请求都发送给 index.html 因此 React Router 的 browserHistory 可以正常工作
app.get('*',function(req,res){

    match({routes:routes,location:req.url},(err,redirect,props)=>{
        if(err){
            res.status(500).send(err.message)
        }else if(redirect){
            res.redirect(redirect.pathname + redirect.search)
        }else if(props){
            // RouterContext 是 Router 所渲染的内容
            // Router 将 props 保存在 state 中监听 'browserHistroy'
            // 但服务端是无状态程序，所以我们需要使用 'match' 在渲染之前获取 props
            // let initialState = {
            //   postsBySubreddit:"1",
            //   selectedSubreddit:"2",
            //   setJumpUrl:"3",
            //   routing:"4",
            //   count:20
            // }
            let initialState = {}
            const store = configStore(initialState);

            const appHtml = renderToString(
                <Provider store={store}>
                  <RouterContext  {...props}/>
                </Provider>

            )
            // Grab the initial state from our Redux store
            const finalState = store.getState()
            // console.log(111);
            res.send(renderPage(appHtml,finalState))
        }else{
            res.status(404).send('Not Found')
        }
    })
})

function renderPage(appHtml,initialState) {
    return `
  <!doctype html>
  <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
  <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
  <!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
  <!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
      <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
          <title></title>
          <meta name="description" content="">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="apple-touch-icon" href="apple-touch-icon.png">

          <style>
              body {
                  padding-top: 50px;

                  padding-bottom: 20px;
              }
          </style>
          <link rel="stylesheet" href="/css/common.css">
          <link rel="stylesheet" href="/css/index.css">

          <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
      </head>
      <body>
          <!--[if lt IE 8]>
              <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href='http://browsehappy.com/'>upgrade your browser</a> to improve your experience.</p>
          <![endif]-->


          <div id="app">${appHtml}BBB</div>
            <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
            </script>
          <script src="/js/commons.js"></script>
          <script src="/js/index.js"></script>
      </body>
  </html>

   `
}

var PORT = process.env.PORT || 8080
app.listen(PORT,function(){
    console.log('Production Express server running at localhost : ' + PORT)
})
