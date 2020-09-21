import React from 'react'
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://i.pinimg.com/originals/5e/6b/1d/5e6b1de8510f7b7743f97d4e8217001a.png" profileSrc="https://miro.medium.com/max/3150/0*Z_bCsSy2AqS-3Z2P" title="Agus K"/>
            <Story image="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg" profileSrc="https://cdn0-production-images-kly.akamaized.net/_PV1QQF13EWw7bAergZn__flpZo=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1492690/original/045518000_1485858956-20170131-London-Love-Story-Dimas-Anggara-FRR4.jpg" title="Dimas Adi"/>
            <Story image="https://images.unsplash.com/photo-1528101759-6c82d7e735e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" profileSrc="https://pbs.twimg.com/profile_images/869851054636007424/YrFquw4R_400x400.jpg" title="Ramlan Afaril"/>
            <Story image="https://cf.shopee.co.id/file/23da1874278da1a72c196715ace35718" profileSrc="https://t-power89.github.io/images/avatar.jpg" title="Dhika Risky"/>
        </div>
    )
}

export default StoryReel
