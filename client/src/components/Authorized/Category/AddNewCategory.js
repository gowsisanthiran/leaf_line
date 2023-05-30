

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';

// import { Box, Typography, TextField, Button } from '@mui/material';
// import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

// import {
//   addCategory,
//   resetMutationResult,
//   selectCategoryMutationResult,
// } from '../../../redux/features/categorySlice';


// const AddNewCategory = () => {
//   const dispatch = useDispatch();
//   const { loading, success } = useSelector(selectCategoryMutationResult);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const jsonData = { title, description };
//     dispatch(addCategory({ jsonData, toast }));
//   };

//   useEffect(() => {
//     if (success) {
//       dispatch(resetMutationResult());
//       setTitle('');
//       setDescription('');
//     }
//   }, [success, dispatch]);

//   return (
  
//     <div class="bigbox">
//       <Box
//         sx={{
//           // marginTop: 8,

//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           boxShadow: '0 2px 4px #5F8D4E',
//           borderRadius: '4px',
//           padding: '50px',
//           backgroundColor: '#fff',
//           height: "100% !important",
//           width: "580px",
//           marginLeft: "450px"

//         }}
//       >
//         <Typography component="div" variant="h5" color="#1b5e20">
//           Add new category
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit}>
//           <TextField
//             type="text"
//             id="title"
//             label="Title"
//             name="title"
//             margin="normal"
//             required
//             fullWidth
//             autoFocus
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             color="success"
//           />
//           <TextField
//             type="text"
//             id="description"
//             label="Description"
//             name="description"
//             margin="normal"
//             required
//             fullWidth
//             autoFocus
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             color="success"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             disabled={loading ? true : false}
//             variant="contained"
//             startIcon={<AddBoxOutlinedIcon />}
//             sx={{
//               mt: 3, mb: 2, backgroundImage: 'linear-gradient(to right, #143a0d, #c0dca5)'
//             }}
//           >
//             Add Category
//           </Button>
//         </Box>
//       </Box>
//     </div>
   
//   );
// };

// export default AddNewCategory;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Box, Typography, TextField, Button } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import {
  addCategory,
  resetMutationResult,
  selectCategoryMutationResult,
} from '../../../redux/features/categorySlice';


const AddNewCategory = () => {
  const dispatch = useDispatch();
  const { loading, success } = useSelector(selectCategoryMutationResult);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = { title, description };
    dispatch(addCategory({ jsonData, toast }));
  };

  useEffect(() => {
    if (success) {
      dispatch(resetMutationResult());
      setTitle('');
      setDescription('');
    }
  }, [success, dispatch]);

  return (
    <div className="bigbox">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 2px 4px #5F8D4E',
          borderRadius: '4px',
          padding: '50px',
          backgroundColor: '#fff',
          width: '100%',
          maxWidth: '580px',
          margin: '0 auto',
        }}
      >
        <Typography component="div" variant="h5" color="#1b5e20">
          Add new category
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            type="text"
            id="title"
            label="Title"
            name="title"
            margin="normal"
            required
            fullWidth
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            color="success"
          />
          <TextField
            type="text"
            id="description"
            label="Description"
            name="description"
            margin="normal"
            required
            fullWidth
            autoFocus
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            color="success"
          />
          <Button
            type="submit"
            fullWidth
            disabled={loading ? true : false}
            variant="contained"
            startIcon={<AddBoxOutlinedIcon />}
            sx={{
              mt: 3,
              mb: 2,
              backgroundImage: 'linear-gradient(to right, #143a0d, #c0dca5)',
            }}
          >
            Add Category
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default AddNewCategory;
