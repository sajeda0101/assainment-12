import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/images/eror.jpg'

const Errorpage = () => {
    return (
        <section>
        <div className='lg:ml-52 ml-28 w-full mt-24'>

          <img src={error} alt=""  className='w-8/12 '/>
          <Link to='/'><p className='text-center mt-6 bg-indigo-600 w-52 h-12 pt-2 ml-16 lg:ml-64 text-white rounded text-xl'>Back to homepage</p></Link>
        </div>
    </section>
    );
};

export default Errorpage;