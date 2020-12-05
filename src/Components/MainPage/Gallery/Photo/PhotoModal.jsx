import {CheckCircleOutlined, CloseOutlined, DownOutlined, PlusCircleOutlined} from "@ant-design/icons";
import i18next from "i18next";
import {PhotoLoader} from "../../../Common/Loaders/PhotoLoader/PhotoLoader";
import Modal from "../../../Common/Modal/Modal";
import React from "react";
import {withStyles} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import s from "./Photo.module.css";
import {RadioButton} from "../../../Common/RadioButton/RadioButton";

export const PhotoModal = (props) => {

    const LightTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: theme.palette.common.white,
            color: `black`,
            boxShadow: theme.shadows[1],
            fontSize: 16,
            width: `300px`
        }
    }))(Tooltip);

    const SizeComp = () => {
        return (
            <div className={s.tooltip}>
                <div className={s.chooseSize}>
                    {i18next.t('chooseSize')}
                </div>
                <div className={s.sizes}>
                    {
                        Array.from([1, 2, 3, 4]).map(id => {
                            return (
                                <div onClick={() => {
                                    props.setChecked(id);
                                    props.setBg('#05a081');
                                }}>
                                    <RadioButton
                                        text={props.sizes(id)}
                                        id={id}
                                        isChecked={props.checked}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    return (
        <Modal open={props.open} onClose={() => props.changeModalState(false)}>
            {
                (props.clientWidth < 1050) &&
                <span style={{position: `fixed`, left: 3, top: 3, height: `20px`, fontSize: 20, zIndex: 1000}}>
                        <CloseOutlined style={{color: `black`}} onClick={() => props.changeModalState(false)}/>
                    </span>
            }
            <div style={{display: `flex`, flexWrap: `wrap`}}>
                {props.photographer}
                <div>
                    <div onClick={() => props.changeCollection(!props.inCollection, props.photoId)}>
                        {
                            props.getStorage('collection').split(',').includes(String(props.photoId))
                            && !!props.inCollection ? <CheckCircleOutlined/> : <PlusCircleOutlined/>
                        }
                        {i18next.t(`collect-${props.inCollection}`)}
                    </div>
                    {
                        !props.disable
                            ?
                            <>
                                <div onClick={e => props.download(e, props.url)}
                                     style={{display: `flex`, flexDirection: `column`}}>
                                    <p style={{marginLeft: `-35%`}}>{i18next.t('download')}</p>
                                    <i style={{
                                        marginLeft: `-35%`,
                                        marginTop: `5px`,
                                        textTransform: `capitalize`
                                    }}>
                                        {props.sizes(props.checked)}
                                    </i>
                                </div>
                                <LightTooltip
                                    title={<SizeComp/>}
                                    interactive
                                    leaveDelay={200}
                                    placement="bottom-end"
                                    disableFocusListener
                                    onOpen={() => props.toggleHover(true)}
                                    onClose={() => props.toggleHover(false)}
                                >
                                    <div style={props.tooltipBtnStyles}>
                                        <DownOutlined style={{marginRight: `25px`}}/>
                                    </div>
                                </LightTooltip>
                            </>
                            : <PhotoLoader/>
                    }
                </div>
            </div>
            <img
                src={props.url.large}
                alt=""
            />
        </Modal>
    )
}