import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';
import { validateSequence, validateLength } from '../../utils/validation';

interface FormData {
  sequence1: string;
  sequence2: string;
}

interface SequenceFormProps {
  onSubmit: (data: FormData) => void;
}

const SequenceForm: React.FC<SequenceFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

  const sequence1 = watch('sequence1');
  const sequence2 = watch('sequence2');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="First Amino Acid Sequence"
          variant="outlined"
          fullWidth
          {...register('sequence1', {
            required: 'Sequence is required',
            validate: validateSequence
          })}
          error={!!errors.sequence1}
          helperText={errors.sequence1?.message}
        />
        
        <TextField
          label="Second Amino Acid Sequence"
          variant="outlined"
          fullWidth
          {...register('sequence2', {
            required: 'Sequence is required',
            validate: (value) => {
              const isValid = validateSequence(value);
              if (isValid !== true) return isValid;
              
              if (sequence1) {
                return validateLength(sequence1, value);
              }
              return true;
            }
          })}
          error={!!errors.sequence2}
          helperText={errors.sequence2?.message}
        />
        
        <Button 
          type="submit" 
          variant="contained" 
          size="large"
          disabled={!!errors.sequence1 || !!errors.sequence2}
        >
          Visualize Alignment
        </Button>
      </Box>
    </form>
  );
};

export default SequenceForm;