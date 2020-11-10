import s from './Photo.module.css';
import React from "react";
import {HeartTwoTone, HeartOutlined, PlusCircleOutlined, VerticalAlignBottomOutlined} from '@ant-design/icons';

const Photo = (props) => {

    return (
        <div className={s.Photo}>
            <img src={props.url} alt=""/>
            <div className={s.photoAdds}>
                <div>
                    <VerticalAlignBottomOutlined style={{fontSize: `20px`, color: `#fff`}} />
                </div>
                <div>
                    <PlusCircleOutlined style={{fontSize: `20px`, color: `#fff`}}/>
                </div>
                <div>
                    {
                        props.isLiked
                            ? <HeartTwoTone style={{fontSize: `20px`}} twoToneColor={'#FF0000'}/>
                            : <HeartOutlined style={{fontSize: `20px`, color: `#fff`}}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Photo;