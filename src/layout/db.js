import React, { Component } from 'react';

import './page.css';

const default_home = {
    0:
    <img 
    className="imgweb" 
    src="http://gintarekairyte.com/DB/home-page-main-content-img.jpg" 
    alt="This is Gintare Kairyte, playing guitar in park at fall seasson"
    />,
    
    1:
        <span>
        Music is wonderful to add to the atmosphere of a party,
        event or even a quiet night at home. 
        Learning how to sing or play an instrument can do wonders is a 
        remarkable
        skill in life whether you want it for professional reasons or for 
        your own pleasure
        </span>,
    2:
        <span>
        I am a graduate of a music school back in my home country of 
        Lithuania and I have been tutoring people of all ages ever since 
        I was studying.
        From classical music to something a bit more contemporary, 
        I have the expertise and experience to tutor you to enhance 
        your skills and
        take it to new heights. Whether you want to train for a formal 
        performance or you want to play in a band,
        I can help you refine your skills. 
        </span>,
    3:
        <span>
        I believe that each student has unique needs so I will 
        personalise every lesson based on your requests so you get the exact 
        outcome you desire. I will ensure that you are at and comfortable 
        during the entire process. I thrive on seeing the progress of my 
        students and it gives me great pleasure and pride to add to their 
        skills and watch them blossom. 
        </span>,
    4:
        <span>
        Whether you want guitar, piano, or singing lessons, I personalise every 
        session according to the requests and needs of each student and try
        to make the most of it for the best possible outcome. 
        </span>,
    5:
        <span>
        Music has great psychological benefits and will add so much to your life. 
        For a rewarding and fun learning experience, simply get in touch for a 
        quick chat and discuss your aims. Hope to hear from you and 
        thanks for your interest.

        </span>,
    
      };
     

const guitar = {
    0:
    <img 
    className="imgweb" 
    src="http://gintarekairyte.com/DB/guitarpic.jpeg" 
    alt="Picture of black classic guitar, on concret wall background, kind of art picture"
    />,

    1:<span>
        I have the expertise and over 5 years of experience to enhance 
        your skills and take it to new heights. Whether you are just starting 
        out or you’re an amateur player, I will personalise every lesson based 
        on your requests and goals. From learning the basics to reading 
        the notes and learning how to play different tunes, my lessons will 
        match your pace and aptitude. Please get in touch to discuss more about 
        my classes and I will ensure to make my guitar learning sessions a 
        rewarding and fun journey. 
    </span>,
    2:
    <span>
        Additional charges apply if I need to travel to your location. 
        Please get in touch for a quick chat and more information. 
        Hope to hear from you soon.
    </span>,
    
};

const piano = {
    0:
    <img 
    className="imgweb" 
    src="http://gintarekairyte.com/DB/pianopic.jpeg" 
    alt="Picture of piano keyboard, firts plan it's clear but last plan it's blur"
    />,
    1:
    <span>
    I took piano lessons for over 7 years and I can proudly say that it 
    is one of the best things I’ve done in my life. Whether you are just 
    starting out or you’re an amateur player, I will personalize every 
    lesson based on your requests and goals. From learning the basics to 
    reading notes and learning how to play different tunes, my lessons 
    will match your pace and aptitude. Please get in touch to discuss more 
    about my classes and I will ensure to make my piano learning sessions a 
    rewarding and fun journey. 
    </span>,
    2:
    <span>
    Additional charges apply if I need to travel to your location. 
    Please get in touch for a quick chat and more information. 
    Hope to hear from you soon.
    </span>
};

const vocals = {
0:
<img 
className="imgweb" 
src="http://gintarekairyte.com/DB/vocalspic.jpeg" 
alt="Picture of peron singing to microphone, visible it' 
only bottom part of face on left top corner, and microphone on bottom right corner, 
there are on plain black bacgroud."
/>,
1:
<span>
I have been singing since I was a child (a bonus that comes from growing 
up in a musical family!). I love music and songs and want to share my 
passion and spread my knowledge with other enthusiastic fans. Whether 
you are just starting out or you’re an amateur singer, I will personalise 
every lesson based on your requests and goals. From reading the notes and 
learning how to sing different tunes and scales, my lessons will match your 
pace and aptitude. Please get in touch to discuss more about my classes and I will 
ensure to make my learning sessions a rewarding and fun journey. 
</span>,
2:
<span>
Additional charges apply if I need to travel to your location. 
Please get in touch for a quick chat and more information. 
Hope to hear from you soon.
</span>
};
const contact={
1:
<span><h1><i class="icon-mail-alt"></i>Contact me</h1></span>,
2:
<span><i class="icon-mail"></i>Email: contact.gintare@gmail.com</span>,
3:
<span><a href="https://www.facebook.com/ambergklessons/?modal=admin_todo_tour&notif_id=1535065032507837&notif_t=page_invite" target="_blank"> <i class="icon-facebook"></i>Facebook</a></span>,
4:
<span>sss</span>,
5:
<span>sss</span>,
};

const pricelists ={
    1:
    <span>
    <h2>Price List:</h2>
    </span>,
    2:
    <span>
    <h4>Piano</h4>
    
    <p>Half hour lessons<br/><br/> 1 lesson - £20  <br/>5 lessons - £90  <br/>10 lessons - £180 </p><br/>
    <p>1 hour lessons <br/><br/>1 lesson - £35  <br/>5 lessons - £165 <br/>10 lessons - £315 </p><br/>
    </span>,
    3:
    <span>
    <h4>Guitar</h4>
    
    <p>Half hour lessons <br/><br/>1 lesson - £17 <br/>5 lessons - £75 <br/>10 lessons - £140</p><br/>
    <p>1 Hour lessons <br/><br/>1 lesson - £25 <br/>5 lessons - £115 <br/>10 lessons - £225 </p><br/>
    </span>

    };


export {default_home,guitar, piano, vocals, contact, pricelists};
