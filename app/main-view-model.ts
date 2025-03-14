import { Observable } from '@nativescript/core';
import { Utils } from '@nativescript/core';

export class MainViewModel extends Observable {
    constructor() {
        super();
    }

    onRaydiumTap() {
        Utils.openUrl("https://raydium.io/swap/?inputMint=sol&outputMint=43YakhC3TcSuTgSXnxFgw8uKL8VkuLuFa4M6Bninpump");
    }

    onCMCTap() {
        Utils.openUrl("https://coinmarketcap.com/es/currencies/lc-shib/");
    }

    onChatTap() {
        Utils.openUrl("https://www.chatbase.co/chatbot-iframe/8Be4uBiTXxDuu3yvyloVf");
    }

    onTwitterTap() {
        Utils.openUrl("https://x.com/LCSHIB");
    }

    onTelegramTap() {
        Utils.openUrl("https://t.me/LCSHIBCTOPORTAL");
    }

    onWebsiteTap() {
        Utils.openUrl("https://www.lcshib.com/");
    }
}