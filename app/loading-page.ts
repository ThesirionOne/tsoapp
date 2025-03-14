import { EventData, Page } from '@nativescript/core';
import { setTimeout } from '@nativescript/core/timer';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const progressBar = page.getViewById('progressBar');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 2;
        progressBar.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                page.frame.navigate({
                    moduleName: 'main-page',
                    clearHistory: true
                });
            }, 500);
        }
    }, 40);
}