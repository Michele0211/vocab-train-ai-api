import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OPENAI_API_KEY is missing' });
  }

  const { promptText } = req.body ?? {};
  if (!promptText) {
    return res.status(400).json({ error: 'promptText is required' });
  }

  // 今はAIを呼ばず、疎通確認用のダミー返却
  return res.status(200).json({
    text: `（API疎通OK）受け取ったプロンプト:\n${promptText}`,
  });
}