import TelegramBot from 'node-telegram-bot-api';

let bot;

export default function handler(req, res) {
    const { botToken } = req.body;

    if (!botToken) {
        return res.status(400).json({ message: 'Bot token is required' });
    }

    // Initialize the bot if not already initialized
    if (!bot || bot.options.token !== botToken) {
        bot = new TelegramBot(botToken, { polling: true });

        bot.on('message', (msg) => {
            const chatId = msg.chat.id;
            console.log
            bot.sendMessage(chatId, 'Hello! I am your bot.');
        });
    }

    res.status(200).json({ message: 'Bot started successfully' });
}
