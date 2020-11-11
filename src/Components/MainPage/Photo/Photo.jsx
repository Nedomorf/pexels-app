import s from './Photo.module.css';
import React from "react";
import {HeartTwoTone, HeartOutlined, PlusCircleOutlined, VerticalAlignBottomOutlined} from '@ant-design/icons';

const Photo = (props) => {

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
                        props.isLiked
                            ? <HeartTwoTone style={{fontSize: `20px`}} twoToneColor={'#FF0000'}/>
                            : <HeartOutlined style={{fontSize: `20px`}} className={s.addsElement}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Photo;