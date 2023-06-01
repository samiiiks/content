// import React from 'react';
// import { CircularProgress,makeStyles } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//     loaderContainer: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//     },
//   }));
//   const Loader = () => {
//     const classes = useStyles();

//     return (
//       <div className={classes.loaderContainer}>
//       </div>
//     );
//   };


//   export default Loader;

import React from 'react'

const Loader = () => {
    return (
        <div>
            <div class="container mx-auto">
                <div class="grid grid-cols-3 gap-4">
                    <div class="bg-red-200">Item 1</div>
                    <div class="bg-gray-200">Item 2</div>
                    <div class="bg-gray-200">Item 3</div>
                </div>
            </div>

        </div>
    )
}

export default Loader







