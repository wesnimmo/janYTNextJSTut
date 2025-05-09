"use client"
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'


const SubmitButton = () => {

    // useFormStatus is a pure react hook- nothing to do w/ NextJS
    const { pending } = useFormStatus()

    return ( 
    <Button className='w-fit' type='submit' disabled={pending}>{pending ? "Submitting" : "Submit" }</Button>
    )
}

export default SubmitButton

