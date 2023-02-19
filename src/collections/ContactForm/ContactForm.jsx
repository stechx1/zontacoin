import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('xlekbjvq');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    setFirstName('');
    setLastName('');
    setMessage('');
    setSubject('');
    setEmail('');
  }, []);
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      class='w-full max-w-lg'
      action='https://formspree.io/f/xlekbjvq'
      method='POST'
    >
      <div class='flex flex-wrap -mx-3 mb-6'>
        <div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label
            class='block uppercase tracking-wide text-white text-xs font-bold mb-2'
            for='firstname'
          >
            First Name
          </label>
          <input
            class='appearance-none block w-full bg-gray-800 text-gray-300  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border focus:border-white'
            id='firstname'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name='firstname'
            type='text'
            placeholder='Jane'
          />
          <ValidationError
            prefix='firstname'
            field='firstname'
            errors={state.errors}
          />
        </div>
        <div class='w-full md:w-1/2 px-3'>
          <label
            class='block uppercase tracking-wide text-white text-xs font-bold mb-2'
            for='lastname'
          >
            Last Name
          </label>

          <input
            class='appearance-none block w-full bg-gray-800 text-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border focus:border-white'
            id='lastname'
            name='lastname'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            placeholder='Doe'
          />
          <ValidationError
            prefix='lastname'
            field='lastname'
            errors={state.errors}
          />
        </div>
      </div>
      <div class='flex flex-wrap -mx-3 mb-6'>
        <div class='w-full px-3'>
          <label
            class='block uppercase tracking-wide text-white text-xs font-bold mb-2'
            for='email'
          >
            Email Address
          </label>
          <input
            class='appearance-none block w-full bg-gray-800 text-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border focus:border-white'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='someone@example.com'
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>
        <div class='w-full px-3'>
          <label
            class='block uppercase tracking-wide text-white text-xs font-bold mb-2'
            for='subject'
          >
            Subject
          </label>
          <input
            class='appearance-none block w-full bg-gray-800 text-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border focus:border-white'
            id='subject'
            name='subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type='text'
            placeholder='Subject Here'
          />
          <ValidationError
            prefix='Subject'
            field='subject'
            errors={state.errors}
          />
        </div>
        <div class='w-full px-3'>
          <label
            class='block uppercase tracking-wide text-white text-xs font-bold mb-2'
            for='message'
          >
            Message
          </label>
          <textarea
            rows={8}
            class='appearance-none block w-full bg-gray-800 text-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border focus:border-white'
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type='text'
            name='message'
            placeholder='Message Here'
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
        </div>
        <div className='text-center'>
          <button
            className='bg-blue-500 py-2 px-8 rounded-full ml-4'
            type='submit'
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
