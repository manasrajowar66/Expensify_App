import React from 'react';

const HelpPage = (props) =>(
    <div>
        this my help page {props.match.params.val}
    </div>
);

export default HelpPage;