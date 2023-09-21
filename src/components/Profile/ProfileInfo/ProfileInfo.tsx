import React, { Suspense } from "react";
import s from "./ProfileInfo.module.css";
import { ProfilePropsType } from "../Profile";
import { Preloader } from "../../common/Preloader/Preloader";
import user from "../../../assets/images/user.png";
import tw from "../../../assets/socialMediaIcons/twitter.svg";
import fb from "../../../assets/socialMediaIcons/facebook.svg";
import inst from "../../../assets/socialMediaIcons/instagram.svg";
import gh from "../../../assets/socialMediaIcons/github.svg";
import youtube from "../../../assets/socialMediaIcons/youtube.svg";
import { ProfileStatusWithHooks } from "./ProfileStatus/ProfileStatusWithHooks";

export const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, ...props }: ProfilePropsType) => {
  if (!profile) {
    return (
      <div>
        <Preloader />
        <div>User not found</div>
      </div>
    );
  }
  let avatar = profile.photos?.small ? profile.photos.small : user;
  const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <Suspense fallback={<Preloader />}>
        <div className={s.profile__main}>
          <img src={avatar} alt="avatar" className={s.profile__avatar} />
          <div>
            <div className={s.profile__name}>{profile.fullName}</div>
            <div className={s.aboutMe}>{profile.aboutMe}</div>
            <ProfileStatusWithHooks status={status} userId={profile.userId} updateStatus={updateStatus} />
          </div>
        </div>
        <span>{isOwner && <input type={"file"} onChange={(e) => onMainPhotoSelected(e)} />}</span>
        <div className={s.contacts}>
          {profile.contacts && profile.contacts.twitter && (
            <span>
              <a href={profile.contacts.twitter} target="_blank" rel="noopener noreferrer">
                <img className={s.contacts__icon} src={tw} />
              </a>
            </span>
          )}
          {profile.contacts && profile.contacts.facebook && (
            <span>
              <a href={profile.contacts.facebook} target="_blank" rel="noopener noreferrer">
                <img className={s.contacts__icon} src={fb} />
              </a>
            </span>
          )}
          {profile.contacts && profile.contacts.instagram && (
            <span>
              <a href={profile.contacts.instagram} target="_blank" rel="noopener noreferrer">
                <img className={s.contacts__icon} src={inst} />
              </a>
            </span>
          )}
          {profile.contacts && profile.contacts.github && (
            <span>
              <a href={profile.contacts.github} target="_blank" rel="noopener noreferrer">
                <img className={s.contacts__icon} src={gh} />
              </a>
            </span>
          )}
          {profile.contacts && profile.contacts.youtube && (
            <span>
              <a href={profile.contacts.youtube} target="_blank" rel="noopener noreferrer">
                <img className={s.contacts__icon} src={youtube} />
              </a>
            </span>
          )}
        </div>
      </Suspense>
    </div>
  );
};
