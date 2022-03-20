import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ReactJson from 'react-json-view';

function Results() {
  const results = useSelector((state: RootState) => state.result.results);
  return !results.length ? (
    <Typography variant="h5">
      To see some results use calculate form first :)
    </Typography>
  ) : (
    <>
      <Typography variant="h4">Results:</Typography>
      <Stack spacing={4}>
        {results.map((result, i) => (
          <div key={i}>
            <Typography variant="h6">Result {i + 1}:</Typography>
            <ReactJson
              name={false}
              displayDataTypes={false}
              enableClipboard={false}
              displayObjectSize={false}
              indentWidth={4}
              src={result}
              theme="monokai"
            />
          </div>
        ))}
      </Stack>
    </>
  );
}

export default Results;
