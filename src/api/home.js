import requests from "@/utils/request";

export default {
    // 请求轮播图的数据
    requestCarouselList() {
        return requests({
            url: '/carouselList',
            method: 'GET'
        });
    },
    // 请求通知的数据
    requestNotificationList(offset, count) {
        return requests({
            url: '/notificationList',
            method: 'POST',
            data: {
                offset, count
            }
        });
    },
    // 请求新闻的数据
    requestNewsList(offset, count) {
        return requests({
            url: '/newsList',
            method: 'POST',
            data: {
                offset, count
            }
        });
    },
}