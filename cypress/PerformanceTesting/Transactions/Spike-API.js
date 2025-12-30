import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 0 },
    { duration: '5s', target: 400 },
    { duration: '20s', target: 400 },
    { duration: '5s', target: 0 },
  ]
};

const BASE_URL = 'https://parabank.parasoft.com/parabank';

export default function () {

  const loginRes = http.post(`${BASE_URL}/login.htm`, {
    username: 'john',
    password: 'demo',
  });

  check(loginRes, {
    'login ok': r => r.status === 200,
  });

  const transferRes = http.post(
    `${BASE_URL}/services/bank/transfer?fromAccountId=13344&toAccountId=13677&amount=1`
  );

  check(transferRes, {
    'transfer ok': r => r.status === 200,
    'resp < 500ms': r => r.timings.duration < 500,
  });

  sleep(1);
}
