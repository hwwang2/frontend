import React, { useState, useEffect } from 'react';
import useProfile from "@site/src/hooks/useProfile";

function PersonalAvatar() {
    const { profile } = useProfile();

    const [avatar, setAvatar] = useState(null);
    const [username, setUsername] = useState(null);

    console.log(profile);
    
    useEffect(() => {
        setAvatar(profile?.data?.avatar);
        setUsername(profile?.data?.username);
    }, [profile]);

    return (
        <div className="flex items-center w-full px-8 mx-auto flex-col md:w-[1024px] md:flex-row md:items-end">
            <div className="h-32 w-32 rounded-full bg-white -mt-[68px] flex-shrink-0 border-4 border-white box-content overflow-hidden md:mr-5">
                <img src={ avatar ? avatar : require('@site/static/img/user-avatar.jpg').default} alt="WTF Academy" className="w-full h-full"/>
            </div>
            <p className="text-2xl font-bold leading-8 text-gray-900">{ username }</p>
        </div>
    );
}

export default PersonalAvatar;