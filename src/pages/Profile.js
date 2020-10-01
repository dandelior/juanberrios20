import React from 'react';
import { Helmet } from "react-helmet";
import { Profile } from './../parts/Profile';

class ProfilePage extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Perfil — Juan Berrios</title>
                </Helmet>
                <Profile />
            </>
        )
    }
}

export default ProfilePage;