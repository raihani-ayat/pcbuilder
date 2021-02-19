import React from 'react';
import './Blog.css'

function Blog(props) {
    return (
        <>
            <li className="Blog__item">
                    <figure className="Blog__picture_wrap">
                        <img className="Blog__img" alt="img" src={props.src} />
                    </figure>
                    <h2 className="Blog__title"> {props.title} </h2> 

                    <p className="thedescription">{props.des}</p> 

                    <div className="container">
                            <h4>{props.t1}</h4>
                            <p>{props.p1}</p>
                            <h4>{props.t2}</h4>
                            <p>{props.p2}</p>
                            <h4>{props.t3}</h4>
                            <p>{props.p3}</p>
                            <h4>{props.t4}</h4>
                            <p >{props.p4}</p>
                            <h4>{props.t5}</h4>
                            <p >{props.p5}</p>
                            <h4>{props.t6}</h4>
                            <p >{props.p6}</p>
                            <h4>{props.t7}</h4>
                            <p>{props.p7}</p>
                    </div>
  

            </li>
        </>
    )
}

export default Blog
