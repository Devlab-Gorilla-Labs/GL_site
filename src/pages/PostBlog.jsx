import React from 'react'
import { Form, FormGroup, FormLabel, Button } from 'react-bootstrap'

import firebase from 'firebase/compat'

import { db } from '../firebase'
import HeaderOne from '../common/header/HeaderOne'


const PostBlog = () => {

    const [ postData, SetPostData ] = React.useState({})

    const changeHandler = event => {
        const value = event.target.value
        const property = event.target.name

        SetPostData( {...postData, [property]: value })
        console.log( property, value )
        console.log( postData )
    }

    const savePost = (e) => {
        e.preventDefault()

        console.log(postData)

        db.collection('clcPosts').doc().set(postData)

    }


    return (
        <>
            <div className="container">

                <HeaderOne />

                

                <Form onSubmit={ savePost } >
                    <FormGroup>
                        <FormLabel>Titulo</FormLabel>
                        <input
                            type="text"
                            name='titulo'
                            id='title'
                            placeholder='Como se llama el Post?'
                            onChange={changeHandler}
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Cover</FormLabel>
                        <input
                            type="text"
                            name='cover'
                            id='cover'
                            placeholder='URL cover...'
                            onChange={changeHandler}
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>Contenido</FormLabel>
                        <input
                            type="text"
                            name='contenido'
                            id='content'
                            placeholder='Contenido de post...'
                            onChange={changeHandler}
                        />
                    </FormGroup>

                    <Button onClick={savePost} type="submit"  >Crear</Button>


                </Form>

            </div>
        </>
    )
}

export default PostBlog