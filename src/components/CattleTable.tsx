import React, { useState } from 'react';
import {
  Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Pagination
} from '@mui/material';
import { Cattle as CattleType } from '../types/Cattle';

interface Props {
  data?: CattleType[],
}

const CattleTable: React.FC<Props> = (props) => {
  const { data } = props;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const itemsPerPage = 10;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePaginationChange = (event: { [key: string]: any }, pageNumber: number) => {
    setPageNumber(pageNumber);
  }

  const formatDate = (dateString: string) => {
    const ano = dateString.substring(0, 4);
    const mes = dateString.substring(4, 2);
    const dia = dateString.substring(6, 2);

    return `${dia}/${mes}/${ano}`
  }

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
            {data && data.slice(startIndex, endIndex).map((row: CattleType) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell align="right">{formatDate(row.data_abate.toString())}</TableCell>
                <TableCell align="right">{formatDate(row.data_desossa.toString())}</TableCell>
                <TableCell align="right">{row.raca}</TableCell>
                <TableCell align="right">{row.peso_carcaca}</TableCell>
                <TableCell align="right">{row.responsavel_desossa}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {data && (
          <Pagination
            count={data.length / 10}
            color="primary"
            className="flex justify-center my-2"
            onChange={handlePaginationChange}
          />
        )}
      </TableContainer>
    </>
  )
}

export default CattleTable;
