import React, { useState } from 'react';
import {
  Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button
} from '@mui/material';
import { Cattle as CattleType } from '../types/Cattle';

interface Props {
  data?: CattleType[],
}

const CattleTable: React.FC<Props> = (props) => {
  const { data } = props;
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: 950 }} className='m-auto'>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h1 className="font-bold">Nome</h1>
              </TableCell>
              <TableCell align="right">
                <h1 className="font-bold">Data de Abate</h1>
              </TableCell>
              <TableCell align="right">
                <h1 className="font-bold">Data de Desossa</h1>
              </TableCell>
              <TableCell align="right">
                <h1 className="font-bold">Raça</h1>
              </TableCell>
              <TableCell align="right">
                <h1 className="font-bold">Peso da Carcaça</h1>
              </TableCell>
              <TableCell align="right">
                <h1 className="font-bold">Responsável pela Desossa</h1>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.slice(pageNumber - 1, pageNumber * 10).map((row: CattleType) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell align="right">{row.data_abate}</TableCell>
                <TableCell align="right">{row.data_desossa}</TableCell>
                <TableCell align="right">{row.raca}</TableCell>
                <TableCell align="right">{row.peso_carcaca}</TableCell>
                <TableCell align="right">{row.responsavel_desossa}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {pageNumber}
        {data && (
          <div className={`flex ${pageNumber > 1 ? 'justify-between': 'flex-row-reverse'} m-5`}>
            {pageNumber > 1 && (
              <Button variant="contained" onClick={() => setPageNumber(pageNumber - 1)}>Anterior</Button>
            )}
            {pageNumber < data.length && (
              <Button variant="contained" onClick={() => setPageNumber(pageNumber + 1)}>Próximo</Button>
            )}
          </div>
        )}
      </TableContainer>
    </>
  )
}

export default CattleTable;
