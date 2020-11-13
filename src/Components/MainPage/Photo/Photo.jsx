import s from './Photo.module.css';
import React, {useEffect, useState} from "react";
import {HeartTwoTone, HeartOutlined, PlusCircleOutlined, VerticalAlignBottomOutlined} from '@ant-design/icons';

let likes = [];

const Photo = (props) => {

    const [like, setLike] = useState(false);

    useEffect(() => {
        // setLike(props.isLiked);
        let storageLikes = localStorage.getItem('likes');
        likes = storageLikes.split(',');
        // console.log('лайки:', likes)
        // return () => {
        //     alert('123')
        //     localStorage.setItem('likes', likes)
        // }
    }, [likes])

    const changeStorage = (liked) => {
        setLike(liked);
        console.log(like);
        liked
            ? likes.push(props.photoId)
            : likes.splice(likes.indexOf(props.photoId), 1)
        localStorage.setItem('likes', likes)
    }

    return (
        <div className={s.Photo}>
            <img
                src={props.url}
                alt=""
            />
            <div className={s.photoAdds}>
                <div className={s.photographer}>
                    {props.photographer}
                </div>
                <div>
                    <a href={props.url} download="123.jpg">
                        <VerticalAlignBottomOutlined style={{fontSize: `20px`}} className={s.addsElement}/>
                    </a>
                </div>
                <div>
                    <PlusCircleOutlined style={{fontSize: `20px`}} className={s.addsElement}/>
                </div>
                <div>
                    {
                        likes.includes(props.photoId)
                            ? <HeartTwoTone style={{fontSize: `20px`}} twoToneColor={'#FF0000'}
                                            onClick={() => changeStorage(false)}/>
                            : <HeartOutlined style={{fontSize: `20px`}} className={s.addsElement}
                                             onClick={() => changeStorage(true)}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Photo;