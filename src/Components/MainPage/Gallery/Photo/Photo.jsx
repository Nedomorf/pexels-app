import {
    CheckCircleOutlined, HeartOutlined, HeartTwoTone,
    PlusCircleOutlined,
    VerticalAlignBottomOutlined
} from "@ant-design/icons";
import s from "./Photo.module.css";
import Loader from "../../../Common/Loaders/loader.svg";
import React from "react";
import {PhotoModal} from "./PhotoModal";

export const Photo = (props) => {

    return (
        <div>
            <div className={s.Photo} id="photo">
                <img
                    src={props.url.large}
                    alt=""
                    onClick={() => props.changeModalState(true)}
                />
                <div className={s.photoAdds}>
                    <div className={s.photographer}>
                        {props.photographer}
                    </div>
                    <div>
                        {
                            props.disable
                                ? <object type="image/svg+xml" data={Loader}>svg-animation</object>
                                :
                                <a href={props.url.large} download onClick={e => props.download(e, props.url.original)}>
                                    <VerticalAlignBottomOutlined style={{fontSize: `20px`}} className={s.addsElement}/>
                                </a>
                        }
                    </div>
                    <div>
                        {
                            props.getStorage('collection').split(',').includes(String(props.photoId))
                            && !!props.inCollection
                                ?
                                <CheckCircleOutlined
                                    style={{fontSize: `20px`}}
                                    className={s.addsElement}
                                    onClick={() => props.changeCollection(false, props.photoId)}
                                />
                                :
                                <PlusCircleOutlined
                                    style={{fontSize: `20px`}}
                                    className={s.addsElement}
                                    onClick={() => props.changeCollection(true, props.photoId)}
                                />
                        }
                    </div>
                    <div>
                        {
                            props.getStorage('likes').split(',').includes(String(props.photoId))
                            && !!props.like
                                ? <HeartTwoTone style={{fontSize: `20px`}} twoToneColor={'#FF0000'}
                                                onClick={() => props.changeLike(false, props.photoId)}/>
                                : <HeartOutlined style={{fontSize: `20px`}} className={s.addsElement}
                                                 onClick={() => props.changeLike(true, props.photoId)}/>
                        }
                    </div>
                </div>
            </div>

            <PhotoModal
                setChecked={props.setChecked}
                setBg={props.setBg}
                sizes={props.sizes}
                isChecked={props.isChecked}
                open={props.open}
                changeModalState={props.changeModalState}
                clientWidth={props.clientWidth}
                photographer={props.photographer}
                changeCollection={props.changeCollection}
                inCollection={props.inCollection}
                photoId={props.photoId}
                getStorage={props.getStorage}
                disable={props.disable}
                download={props.download}
                url={props.url}
                checked={props.checked}
                toggleHover={props.toggleHover}
                tooltipBtnStyles={props.tooltipBtnStyles}
            />

        </div>
    )
}