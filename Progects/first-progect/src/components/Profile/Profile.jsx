import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';



const Profile =()=>{
    return (
      <div className={s.profile}>
        <div>
          <img className={s.bigImg} src='https://99px.ru/sstorage/53/2021/08/tmb_331546_118648.jpg'/>
        </div>
        <div>
          <img  className={s.ava} src='https://koshka.top/uploads/posts/2021-11/1638030345_1-koshka-top-p-sfinks-s-chernim-nosom-1.jpg'/> + text
        </div>
        <MyPosts/>
      </div>
    );
}
export default Profile