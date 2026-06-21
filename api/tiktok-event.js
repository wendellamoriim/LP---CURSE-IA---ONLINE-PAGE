export default async function handler(req, res) {
  // Permite apenas requisições POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { event_name, event_id, value, currency, user_data, contents } = req.body;

    const pixelId = 'D8RLVTBC77U9LDPEDMP0';
    // Prioriza a variável de ambiente, mas usa o token informado se não estiver definida
    const accessToken = process.env.TIKTOK_ACCESS_TOKEN || '9cc3abb78bf43d6035a29a99f69723eabeb95ec1';

    // Obter IP e User Agent do usuário (extremamente importantes para correspondência do TikTok)
    const rawIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
    // x-forwarded-for pode conter múltiplos IPs separados por vírgula; pegamos o primeiro (do cliente)
    const ip = rawIp.split(',')[0].trim();
    const userAgent = req.headers['user-agent'] || '';

    // Extrair parâmetros do TikTok a partir da URL se enviados pelo client
    const ttclid = user_data?.ttclid || '';

    const payload = {
      event_source: 'web',
      event_source_id: pixelId,
      data: [
        {
          event: event_name || 'InitiateCheckout',
          event_time: Math.floor(Date.now() / 1000),
          event_id: event_id,
          user: {
            ip: ip,
            user_agent: userAgent,
            ...(ttclid ? { ttclid } : {}),
            ...user_data
          },
          properties: {
            contents: contents || [],
            value: value || 220.00,
            currency: currency || 'BRL'
          }
        }
      ]
    };

    const response = await fetch('https://analytics.tiktok.com/api/v1.3/event/', {
      method: 'POST',
      headers: {
        'Access-Token': accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const responseData = await response.json();

    return res.status(200).json({
      success: response.ok,
      status: response.status,
      tiktok_response: responseData
    });
  } catch (error) {
    console.error('Error sending TikTok server-side event:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
