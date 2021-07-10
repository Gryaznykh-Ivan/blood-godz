import React from 'react';

import Profile from '../../components/Setting/Profile';
import Password from '../../components/Setting/Password';
import Social from '../../components/Setting/Social';
import Email from '../../components/Setting/Email';

export default function Setting() {
    return (
        <>
            <img className="absolute top-0 left-0" src="/static/images/setting/glowOne.png" alt="" />
            <img className="absolute top-0 right-0" src="/static/images/setting/glowTwo.png" alt="" />
            <div className="container mx-auto">
                <img className="absolute top-40" src="/static/images/setting/tag.png" alt="" />
                <div className="relative text-white pt-20 pb-40">
                    <div className="font-bold text-4xl uppercase">#настройки аккаунта</div>
                    <Profile />
                    <div className="mt-5 flex space-x-14">
                        <Password />
                        <Social />
                    </div>
                    <Email />
                </div>
            </div>
        </>
    );
};