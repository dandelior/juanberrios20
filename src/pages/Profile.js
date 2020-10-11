import React from 'react';
import { Helmet } from "react-helmet";
import { Profile } from './../parts/Profile';

class ProfilePage extends React.Component {
    render() {

        let year = new Date().getFullYear()

        return (
            <>
                <Helmet>
                    <title>Perfil — Juan Berrios</title>
                    <meta property="og:title" content="Perfil — Juan Berrios" />
                    <meta name="twitter:title" content="Perfil — Juan Berrios" />
                    <meta itemprop="name" content="Perfil — Juan Berrios" />

                    <meta name="description" content="Desde pequeño curioseaba en internet, creando sitios web a través de editores WYSIWYG o en plataformas de blogging. Pero la inquietud por aprender a hacer cosas con mejor calidad y de manera más profesional me llevó a estudiar desarrollo web y un poco de programación de forma autodidacta." />
                    <meta property="og:description" content="Desde pequeño curioseaba en internet, creando sitios web a través de editores WYSIWYG o en plataformas de blogging. Pero la inquietud por aprender a hacer cosas con mejor calidad y de manera más profesional me llevó a estudiar desarrollo web y un poco de programación de forma autodidacta." />
                    <meta name="twitter:description" content="Desde pequeño curioseaba en internet, creando sitios web a través de editores WYSIWYG o en plataformas de blogging. Pero la inquietud por aprender a hacer cosas con mejor calidad y de manera más profesional me llevó a estudiar desarrollo web y un poco de programación de forma autodidacta." />
                    <meta itemprop="description" content="Desde pequeño curioseaba en internet, creando sitios web a través de editores WYSIWYG o en plataformas de blogging. Pero la inquietud por aprender a hacer cosas con mejor calidad y de manera más profesional me llevó a estudiar desarrollo web y un poco de programación de forma autodidacta." />

                    <link rel="canonical" href="https://juanberrios.com/profile" />
                    <meta property="og:url" content="https://juanberrios.com/profile" />
                    <meta name="twitter:url" content="https://juanberrios.com/profile" />

                    <meta property="og:image" content={`https://juanberrios.com/${process.env.PUBLIC_URL + 'img/me.jpg'}`} />
                    <meta property="og:image:width" content="900" />
                    <meta property="og:image:height" content="470" />
                    <meta name="twitter:image" content={`https://juanberrios.com/${process.env.PUBLIC_URL + 'img/me.jpg'}`} />
                    <meta itemprop="image" content={`https://juanberrios.com/${process.env.PUBLIC_URL + 'img/me.jpg'}`} />

                    <meta name="copyright" content={`(c) ${year} Juan Berrios`} />
                </Helmet>
                <Profile />
            </>
        )
    }
}

export default ProfilePage;