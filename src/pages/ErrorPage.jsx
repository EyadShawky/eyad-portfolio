import React from 'react';
import '../style/about.scss'
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <>
        <div className='d-flex justify-content-center align-items-center text-white mt-5' style={{ height: '100%' }}>
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Link to={'/'}><Button type="primary">Back Home</Button></Link>}
            />
           </div>
        </>
    );
}

export default ErrorPage;
