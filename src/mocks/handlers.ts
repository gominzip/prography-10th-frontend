import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/api/apply', async ({ request }) => {
    const requestData = await request.json();

    return HttpResponse.json(
      {
        data: requestData,
        statusCode: 201,
        message: '지원서 제출 성공'
      },
      { status: 201 }
    );
  })
];
