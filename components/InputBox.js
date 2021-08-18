import Image from 'next/image'
import {EmojiHappyIcon} from '@heroicons/react/outline'
import {CameraIcon,VideoCameraIcon} from '@heroicons/react/solid'
import {useRef,useState} from 'react'
import {db,storage} from '../firebase'
import firebase from 'firebase'
import { div } from 'prelude-ls'






function InputBox() {

    const inputRef      = useRef(null);
    const filepickerRef = useRef(null);

    const [imageToPost,setImageToPost ] = useState(null)
    

    //Post Sending to Firebase DB
    const sendPost = (e) =>{
        e.preventDefault(); 
        if (!inputRef.current.value) return;

        db.collection('posts').add({
            message: inputRef.current.value,
            name: 'Waleed',
            email:'waleedbinaamer22@gmail.com',
            image:'https://cms.mul.edu.pk/images/default.png',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then( doc =>{
            if(imageToPost){
                //funky upload stuff
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost , 'data_url');
                removeImage();
                uploadTask.on(
                    // state_change 
                    'state_change',
                    // progress
                    null , 
                    // when error comes
                    error =>console.error(error),()=>{
                    //When the upload completes
                    storage.ref('posts').child(doc.id).getDownloadURL().then(url=>{
                        db.collection('posts').doc(doc.id).set({
                          postImage:url  
                        }, {merge: true} /*to merge with prev data*/)
                    })
                })

            }
        }) 

        inputRef.current.value = ''
    }


    //Adding Image to Post 
    const addImageToPost = (e) =>{
        const reader = new FileReader();

        if(e.target.files[0]){
           reader.readAsDataURL(e.target.files[0]); 
        }
        reader.onload = (readerEvent) =>{
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImageToPost(null)
    }


    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 p-4 items-center'>
                <Image
                    className="rounded-full"
                    src="https://links.papareact.com/zof"
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <form className="flex flex-1" action="">
                    <input type="text" className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" 
                    ref={inputRef}
                    placeholder="What's on your mind,"
                    />
                    <button hidden onClick={sendPost} type='submit'>
                        Submit
                    </button>
                </form>

                {imageToPost && (
                    <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                        <img className="h-10 object-contain" src={imageToPost}  />
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}


            </div>
            <div className="flex p-3 border-t justify-evenly">
                <div  className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500'/>
                    <p className="text-xs sm:text-sm xl:text-base"> Live Video </p>
                </div>

                <div onClick={() => filepickerRef.current.click() } className='inputIcon'>
                    <CameraIcon className='h-7 text-green-500'/>
                    <p className="text-xs sm:text-sm xl:text-base"> Photo/Video </p>
                    <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden/>
                </div>

                <div className='inputIcon'>
                    <EmojiHappyIcon className='h-7 text-yellow-500'/>
                    <p className="text-xs sm:text-sm xl:text-base"> Feeling/Activity </p>
                </div>
            </div>
        </div> 
    )
}

export default InputBox
