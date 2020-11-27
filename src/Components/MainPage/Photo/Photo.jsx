import s from './Photo.module.css';
import React, {useState} from "react";
import {createPortal} from 'react-dom';
import {HeartTwoTone, HeartOutlined, PlusCircleOutlined, VerticalAlignBottomOutlined} from '@ant-design/icons';
import Loader from '../../Common/Loaders/loader.svg';

const Photo = (props) => {

    const [like, setLike] = useState(props.getStorage('likes').split(',').includes(String(props.photoId)));
    const [disable, setDisable] = useState(false);

    const download = e => {
        e.preventDefault();
        setDisable(true);
        let url = props.downloadUrl;
        fetch(url, {
            method: "GET",
            headers: {}
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
                    const file = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = file;
                    link.setAttribute("download", "image.jpeg");
                    document.body.appendChild(link);
                    link.click();
                    setDisable(false);
                });
            })
            .catch(err => {
                console.log(err);
            })
    };

    const changeLike = (isLiked, id) => {
        setLike(isLiked);
        let likes = props.getStorage('likes').split(',');
        if (isLiked) {

            likes.push(id)
        } else {
            likes = likes.filter(el => el !== String(id))
        }
        props.setStorage('likes', likes);
        createPortal(<div style={{
            position: `fixed`,
            zIndex: `999`,
            top: `300px`,
            left: `300px`,
            background: `red`
        }}>123</div>, document.getElementById('app'))
        // React.createPortal(<>123</>, document.getElementById('photo'))
    }

    return (
        <div className={s.Photo} id="photo">
            <img
                src={props.url}
                alt=""
            />
            <div className={s.photoAdds}>
                <div className={s.photographer}>
                    {props.photographer}
                </div>
                <div>
                    {
                        disable
                            ? <object type="image/svg+xml" data={Loader}>svg-animation</object>
                            : <a href={props.url} download onClick={e => download(e)}>
                                <VerticalAlignBottomOutlined style={{fontSize: `20px`}} className={s.addsElement}/>
                            </a>
                    }
                </div>
                <div>
                    <PlusCircleOutlined style={{fontSize: `20px`}} className={s.addsElement}/>
                </div>
                <div>
                    {
                        props.getStorage('likes').split(',').includes(String(props.photoId))
                        && !!like
                            ? <HeartTwoTone style={{fontSize: `20px`}} twoToneColor={'#FF0000'}
                                            onClick={() => changeLike(false, props.photoId)}/>
                            : <HeartOutlined style={{fontSize: `20px`}} className={s.addsElement}
                                             onClick={() => changeLike(true, props.photoId)}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Photo;