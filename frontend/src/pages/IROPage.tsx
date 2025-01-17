import React from 'react';
import FeedBackForm from '../components/FeedBackForm.tsx';
import FeedBackList from '../components/FeedBackList.tsx';


const IROPage: React.FC = () => {
    const iroId = 'iro123'; // Replace with actual IRO ID from route or state

    return (
        <div>
            <h1>IRO Page: {iroId}</h1>
            <FeedBackForm iroId={iroId} />
            <FeedBackList iroId={iroId} />
        </div>
    );
};

export default IROPage;