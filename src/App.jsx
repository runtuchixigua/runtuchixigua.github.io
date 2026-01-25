import React from 'react'
import './App.css'
import avatar from '../images/马头.png'
import background from '../images/cow.png'

function App() {
  return (
    <div className="app">
      <div className="background" />
      <div className="content">
        <div className="header">
          <img src={avatar} alt="头像" className="avatar" />
          <h1 className="name">闰土吃西瓜</h1>
          <p className="bio">全栈开发者 | 开源爱好者</p>
        </div>

        <div className="section">
          <h2 className="section-title">技术栈</h2>
          <div className="tags">
            <span className="tag">ML</span>
            <span className="tag">DL</span>
            <span className="tag">KG</span>
            <span className="tag">RAG</span>
            <span className="tag">Overtime</span>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">项目</h2>
          <div className="placeholder">作者在吃深圳特产，还未填写</div>
        </div>

        <div className="section">
          <h2 className="section-title">技术博客</h2>
          <div className="placeholder">作者在吃深圳特产，还未填写</div>
        </div>
      </div>
    </div>
  )
}

export default App
