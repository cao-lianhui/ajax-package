/*ajax��װ-get
       @param url:�����·��
       @param data:���͵�����,��ʽ:key1=value1&key2=value2
       @param callback:�ص�����,�����û������Լ�������,�����߼�
*/
function get(url, data, callback){
       //�����첽����
       var xhr = new XMLHttpRequest();
       //�ж�data�Ƿ�Ϊ��
       if(data){
           url=url+'?'+data;
       }
       //����������
       xhr.open('get',url);
       //��������ͷ(get����ʡ��)
       //ע��ص�����
       xhr.onreadystatechange = function(){
            if(xhr.readyState==4&&xhr.status==200){
                //���ô��ݵĻص�����
                callback(xhr.responseText);
            }
       }
       //������������
       xhr.send(null);
}
/*ajax��װ-post
       @param url:�����·��
       @param data:���͵�����,��ʽ:key1=value1&key2=value2
       @param callback:�ص�����,�����û������Լ�������,�����߼�
*/
function post(url, data, callback){
       //�����첽����
       var xhr = new XMLHttpRequest();
       //����������
       xhr.open('post',url);
       //��������ͷ(post�����ݷ��Ͳ���Ҫ��������ͷ)
       //�ж��Ƿ������ݷ���
       if(data){
             xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
       }
       //ע��ص�����
       xhr.onreadystatechange = function(){
             if(xhr.readyState==4&&xhr.status==200){
                 //���ô��ݵĻص�����
                 callback(xhr.responseText);
             }
       }
       //������������
       xhr.send(data);
}
/*ajax_tool��װ
       @param url:�����·��
       @param type:����Ĳ�ͬ����get��post
       @param data:���͵�����,��ʽ:key1=value1&key2=value2
       @param callback:�ص�����,�����û������Լ�������,�����߼�
*/
function ajax_tool(url,type,data,callback){
       //�����첽����
       var xhr = new XMLHttpRequest();
       //�����get����������
       if(type=='get'&&data){
            url=url+'?'+data;
       }
       //����������
       xhr.open(type,url);
       //��������ͷ(post�����ݷ��Ͳ���Ҫ��������ͷ)
       //�ж��Ƿ������ݷ���
       if(type=='post'&&data){
             xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
       }
       //ע��ص�����
       xhr.onreadystatechange = function(){
             if(xhr.readyState==4&&xhr.status==200){
                 //���ô��ݵĻص�����
                 callback(xhr.responseText);
             }
       }
       //������������
       //�жϲ�ͬ����������
       xhr.send(type=='post'?data:null);
}
/*ajax��װ
       @param option:����һ������
       ���Էֱ�Ϊ(˳����Դ���):
            url:�����·��
            type:����Ĳ�ͬ����get��post
            data:���͵�����,��ʽ:key1=value1&key2=value2
            callback:�ص�����,�����û������Լ�������,�����߼�           
*/
function ajax(option){
       //�����첽����
       var xhr = new XMLHttpRequest();
       //�����get����������
       if(option.type=='get'&&option.data){
            option.url=option.url+'?'+option.data;
       }
       //����������
       xhr.open(option.type,option.url);
       //��������ͷ(post�����ݷ��Ͳ���Ҫ��������ͷ)
       //�ж��Ƿ������ݷ���
       if(option.type=='post'&&option.data){
             xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
       }
       //ע��ص�����
       xhr.onreadystatechange = function(){
             if(xhr.readyState==4&&xhr.status==200){
                 //���շ��ص���������
                 var type = xhr.getResponseHeader('Content-Type');
                 //json��ʽ
                 if(type.indexOf('json')!=-1){
                      option.callback(JSON.parse(xhr.responseText));
                 }
                 //xml��ʽ
                 else if(type.indexOf('xml')!=-1){
                      option.callback(xhr.responseXML);
                 } 
                 //��ͨ��ʽ
                 else{
                      option.callback(xhr.responseText);
                 }
             }
       }
       //������������
       //�жϲ�ͬ����������
       xhr.send(option.type=='post'?option.data:null);
}