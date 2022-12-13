import React from "react";
import s from './ProfileInfo.module.css';
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import user from '../../../assets/images/user.png';
import haveJob from '../../../assets/images/loveMyJob.jpg';
import lookingForAJob from '../../../assets/images/lookingForAJob.jpeg';
import tw from '../../../assets/socialMediaIcons/twitter.svg';
import fb from '../../../assets/socialMediaIcons/facebook.svg';
import inst from '../../../assets/socialMediaIcons/instagram.svg';
import gh from '../../../assets/socialMediaIcons/github.svg';
import youtube from '../../../assets/socialMediaIcons/youtube.svg';


export const ProfileInfo = (props: ProfilePropsType) => {


    if (!props.profile) {
        return <div><Preloader/>
            <div>User not found</div>
        </div>
    }
    return (
        <div>
            <div className={s.profile__header}>
                <img src={props.profile.lookingForAJob ? lookingForAJob : haveJob}
                     className={s.header}/>
            </div>
            <div className={s.profile__main}>
                <img src={props.profile.photos?.small ? props.profile.photos.small : user} alt="avatar"
                     className={s.profile__avatar}/>
                <div>
                    <div className={s.profile__name}>{props.profile.fullName}</div>
                    <div className={s.aboutMe}>{props.profile.aboutMe}</div>
                </div>
            </div>
            <div className={s.contacts}>
                {props.profile.contacts.twitter && <span><a href={props.profile.contacts.twitter} target="_blank"
                                                            rel="noopener noreferrer">
                            <img className={s.contacts__icon} src={tw}/></a>
                        </span>}
                {props.profile.contacts.facebook &&
                    <span><a href={props.profile.contacts.facebook} target="_blank"
                             rel="noopener noreferrer">
                            <img className={s.contacts__icon} src={fb}/></a>
                        </span>

                }
                {props.profile.contacts.instagram &&
                    <span><a href={props.profile.contacts.instagram} target="_blank"
                             rel="noopener noreferrer">
                            <img className={s.contacts__icon} src={inst}/></a>
                        </span>
                }
                {props.profile.contacts.github &&
                    <span><a href={props.profile.contacts.github} target="_blank"
                             rel="noopener noreferrer">
                            <img className={s.contacts__icon} src={gh}/></a>
                        </span>
                }
                {props.profile.contacts.youtube &&
                    <span><a href={props.profile.contacts.youtube} target="_blank"
                             rel="noopener noreferrer">
                            <img className={s.contacts__icon} src={youtube}/></a>
                        </span>
                }
            </div>
        </div>
    );
};