import * as React from 'react';
import Badge from '@mui/joy/Badge';
import Typography from '@mui/joy/Typography';
// import { Button } from '@mui/joy';
// import { LeafyGreen } from 'lucide-react';

export default function Cart() {
  return (
    <div className="flex justify-end">

    <Badge badgeContent={2}  >
      <Typography sx={{ fontSize: 'xl' }}><a href='https://www.google.com'>🛒</a></Typography>
    </Badge>
    </div>
  );
}