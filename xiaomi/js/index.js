$(function () {

    $('#btn_submit').on('click', function () {
        let type_select = $('#type_select option:selected').val();
        let type_select_text = $('#type_select option:selected').text();
        if (!type_select || type_select === '') {
            alert('请选择类型');
            return false;
        }
        console.log(`选择的类型是[${type_select_text}]`);
        let token_value = $('#token_value').val();
        if (!token_value || token_value === '') {
            if (type_select === 'url') {
                alert('请输入获取链接');
            }
            if (type_select === 'token') {
                alert('请输入app token');
            }
            return false;
        }
        let step_num = $('#step_num').val();
        if (!step_num || step_num === '') {
            alert('请输入步数');
            return false;
        }
        let app_token = '';
        if (type_select === 'url') {
            // 获取用户app tokens
            let token_info = '';
            $.ajax({
                // 请求方式
                type: 'GET',
                // 请求的媒体类型
                contentType: 'application/json;charset=UTF-8',
                // 请求地址
                url: app_tokens_url,
                // 请求参数，json字符串
                data: '',
                // 请求成功
                success: function (result) {
                    console.log(result);
                    token_info = result.token_info;
                    app_token = result.app_token;
                },
                // 请求失败，包含具体的错误信息
                error: function (e) {
                    console.log(e.status);
                    console.log(e.responseText);
                }
            });
        }
        if (type_select === 'token') {
            app_token = token_value;
        }
        // 定义data_json
        let data_json = 'data_json=%5B%7B%22summary%22%3A%22%7B%5C%22slp%5C%22%3A%7B%5C%22ss%5C%22%3A77%2C%5C%22lt%5C%22%3A230%2C%5C%22dt%5C%22%3A0%2C%5C%22st%5C%22%3A1591034100%2C%5C%22lb%5C%22%3A9%2C%5C%22dp%5C%22%3A132%2C%5C%22is%5C%22%3A57%2C%5C%22rhr%5C%22%3A0%2C%5C%22stage%5C%22%3A%5B%7B%5C%22start%5C%22%3A115%2C%5C%22stop%5C%22%3A131%2C%5C%22mode%5C%22%3A4%7D%2C%7B%5C%22start%5C%22%3A132%2C%5C%22stop%5C%22%3A156%2C%5C%22mode%5C%22%3A5%7D%2C%7B%5C%22start%5C%22%3A157%2C%5C%22stop%5C%22%3A166%2C%5C%22mode%5C%22%3A4%7D%2C%7B%5C%22start%5C%22%3A167%2C%5C%22stop%5C%22%3A176%2C%5C%22mode%5C%22%3A5%7D%2C%7B%5C%22start%5C%22%3A177%2C%5C%22stop%5C%22%3A207%2C%5C%22mode%5C%22%3A4%7D%2C%7B%5C%22start%5C%22%3A208%2C%5C%22stop%5C%22%3A230%2C%5C%22mode%5C%22%3A5%7D%2C%7B%5C%22start%5C%22%3A231%2C%5C%22stop%5C%22%3A279%2C%5C%22mode%5C%22%3A4%7D%2C%7B%5C%22start%5C%22%3A280%2C%5C%22stop%5C%22%3A298%2C%5C%22mode%5C%22%3A5%7D%2C%7B%5C%22start%5C%22%3A299%2C%5C%22stop%5C%22%3A336%2C%5C%22mode%5C%22%3A4%7D%2C%7B%5C%22start%5C%22%3A337%2C%5C%22stop%5C%22%3A353%2C%5C%22mode%5C%22%3A5%7D%2C%7B%5C%22start%5C%22%3A354%2C%5C%22stop%5C%22%3A368%2C%5C%22mode%5C%22%3A4%7D%2C%7B%5C%22start%5C%22%3A369%2C%5C%22stop%5C%22%3A406%2C%5C%22mode%5C%22%3A5%7D%2C%7B%5C%22start%5C%22%3A407%2C%5C%22stop%5C%22%3A477%2C%5C%22mode%5C%22%3A4%7D%5D%2C%5C%22ed%5C%22%3A1591055820%2C%5C%22wk%5C%22%3A0%2C%5C%22wc%5C%22%3A0%7D%2C%5C%22tz%5C%22%3A%5C%2228800%5C%22%2C%5C%22stp%5C%22%3A%7B%5C%22runCal%5C%22%3A3%2C%5C%22cal%5C%22%3A35%2C%5C%22conAct%5C%22%3A0%2C%5C%22stage%5C%22%3A%5B%7B%5C%22stop%5C%22%3A525%2C%5C%22mode%5C%22%3A1%2C%5C%22dis%5C%22%3A478%2C%5C%22step%5C%22%3A17360%2C%5C%22cal%5C%22%3A12%2C%5C%22start%5C%22%3A509%7D%2C%7B%5C%22stop%5C%22%3A506%2C%5C%22mode%5C%22%3A3%2C%5C%22dis%5C%22%3A439%2C%5C%22step%5C%22%3A17360%2C%5C%22cal%5C%22%3A11%2C%5C%22start%5C%22%3A502%7D%2C%7B%5C%22stop%5C%22%3A501%2C%5C%22mode%5C%22%3A1%2C%5C%22dis%5C%22%3A151%2C%5C%22step%5C%22%3A17360%2C%5C%22cal%5C%22%3A3%2C%5C%22start%5C%22%3A492%7D%5D%2C%5C%22ttl%5C%22%3A' + step_num + '%2C%5C%22dis%5C%22%3A1290%2C%5C%22rn%5C%22%3A0%2C%5C%22wk%5C%22%3A20%2C%5C%22runDist%5C%22%3A69%2C%5C%22ncal%5C%22%3A0%7D%2C%5C%22v%5C%22%3A6%2C%5C%22goal%5C%22%3A8000%7D%22%2C%22data%22%3A%5B%7B%22stop%22%3A1439%2C%22value%22%3A%22UB8AUCsAUB8AUE4AUCsAUCEAYBkAYBEAUC8AUDIAUCAAEYI6ECMAYEsAAVwvEFQAYD0AAUESAU8QEAwAYDEAYDoAYEUAYEsAYBIAagAAagAAUDgAUAcAUAEAUAEAUDAAUBEAUBUAUBcAUAoAUBYAUAUAUAEAUAAAWgAAWgAAWgAAUDIAUDIAUDYAAU8RUCEAUBMAUB8AUCMAUB4AUCcAUCYAUB4AUCcAUBUAUEAAUGALUDMAYBEAYAQAWgAAWgAAUCAAUCsAUAUAUAcAUBoAUCEAUCYAUAQAUAcAUAUAUAEAWgAAWgAAUAMAUAYAUAsAUAYAUAwAWgAAUAUAUAYAUBEAUAsAUAUAUAQAUAsAUA8AUAYAUAkAUAMAUA0AUAUAUAUAUAQAUAoAUAYAUAMAUAYAUAkAUAIAUAwAUAcAUE8AUEAAUEcAUAgAUAoAUCQAUBwAWgAAUBUAUAAAUAAAUAAAUAAAUAAAUAAAUAAAUAAAUAAAUCQAUBQAewAAfB4AewAAcAAAcAAAcAAAcAAAcAIAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcBQAcAAAcAAAcAsAcAAAcAAAcAAAcAAAcAIAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAYAeQkAcAAAWQkAUAAAUAAAUAAAUAAAUAAAcAAAcAAAcAAAegAAegAAcAAAcAAAcAEAcBgAcAAAcAAAcAcAcAAAcAAAcAAAcAAAcAAAcAAAeRQAcAMAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcB0AcAAAcAAAcAAAegAAegAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAegAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcCMAcBQAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcBwAcAAAUAMAUAAAUAAAUAAAUCMAUAwAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcBMAegAAegAAcAcAcAAAcAAAcAAAcAAAcAAAcAAAcAMAcBcAegAAegAAegAAcAAAcAAAcAAAcA8AcAAAcAAAcAAAcAAAeQ0AcAAAcAAAegAAegAAcAsAcAAAcAAAcAAAcAAAcAAAcAAAcA8AcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAQAcAAAcAAAcAIAcAAAcBEAcAMAcAAAcAAAcAAAegAAegAAcAAAcAAAcAAAcAAAcAAAcBEAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcBMAeQAAUAAAUAAAUAAAUAAAUBMAWTAAcAAAcAcAcBgAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAegAAegAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcBMAcCAAUAAAUAAAUAAAUAAAUAAAUAAAUAAAcAAAcC8AeRYAcAAAcAAAcCIAcAAAcAAAcAAAcAAAcCYAcAAAUAAAUAAAUAAAUAAAUAAAUAAAcAAAcCQAeQgAeRYAWVcAUDAAUCoAUDkAYBsAYB8AYE8MbFwAYFUAYC0AYFAAYF0LAWAnEYlKEY5NEGAAYG0AYFgAAVoZEFoAAVgSAWsSAXR0AXJzAXd2EYF7AYJ%2BEVshAXFxAVQ%2BEBsAEUgmATwlEBUAAUUSYDIAAUAbAUMnEDIAATcVAXJjAX52AYV1AVY9AUUrAVgdED8AYB4AUBYAUCIAUBQAUA4AUCcAUBUAUBoAUDkAUCsAUDcAYBcAUBoAUB4AUBUAUBoAUBkAUA8AUBMAUBUAUBUAUDAAUBwAUCMAUBEAUBkAUBcAUBEAUBIAUCsAUAcAUBQAUAYAUBEAUBMAUB8AUB0AUBEAUBUAUCAAUAoAUCYAUCEAUB0AUBQAUBkAUBcAUBAAUBoAUBkAUAwAUBcAUBIAUB8AUBoAUBYAUBEAUBwAUBgAUBQAUB0AUBkAUBsAUA8AUBsAUB0AUA8AUA4AUA0AUAgAUBYAUBMAUCsAUBgAUBgAUBEAUAQAUBAAUBEAUB4AUBUAUBIAUBMAUC8AUA4AUBsAUA8AUBcAUBwAUBIAUDUAUBoAUCMAUBUAUBoAUB0AUDcAUBkAUAwAUCAAUA4AUAUAUAkAUBgAUBoAUBAAUA0AUAAAUBIAUBQAUBcAUAwAUBcAUAoAfgAAcBoAcBQAUBIAUAgAUAoAUAYAUBMAUBcAUBkAUBcAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAA%22%2C%22did%22%3A%22C9FBC7FFFE388EAD%22%2C%22tz%22%3A32%2C%22src%22%3A24%2C%22start%22%3A0%7D%5D%2C%22data_hr%22%3A%22%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%2B%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/%5C/7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%5C/v7%2B%22%2C%22summary_hr%22%3A%22%7B%5C%22ct%5C%22%3A0%2C%5C%22id%5C%22%3A%5B%5D%7D%22%2C%22date%22%3A%222020-06-02%22%7D%5D&device_type=0&enableMultiDevice=1&last_deviceid=C9FBC7FFFE388EAD&last_source=24&last_sync_data_time=1591066321&userid=1001798917&uuid=515C1D1A-63FA-4656-81D3-58A0F2FEB152';
        // 当前时间戳
        let now_timestamp = new Date().getTime();
        // 发送步数url
        let modify_step_url = 'https://api-mifit-cn.huami.com/v1/data/band_data.json?r=&t=' + now_timestamp;
        $.ajax({
            // 请求方式
            type: 'POST',
            // 请求的媒体类型
            contentType: 'application/json;charset=UTF-8',
            // 请求地址
            url: modify_step_url,
            headers: {
                'apptoken': app_token,
                'User-Agent': 'MiFit/4.1.1 (iPhone; iOS 13.4.1; Scale/3.00)'
            },
            // 请求参数，json字符串
            data: JSON.stringify({
                data_json: data_json,
                userid: '',
                device_type: 0,
                last_sync_data_time: now_timestamp,
                last_deviceid: ''
            }),
            // 请求成功
            success: function (result) {
                console.log(result);
            },
            // 请求失败，包含具体的错误信息
            error: function (e) {
                console.log(e.status);
                console.log(e.responseText);
            }
        });
    });

});