var targetWrapper = document.getElementById("task");
targetWrapper.innerHTML = `
    <div class="warpper">
            <div class="container">

                <div class="textCon">
                    <h1>任务管理</h1>
                    <div class="addBtn">+</div>
                </div>
        
            <ul>
            <!-- 	<li>
                    <div class="line-Left">
                        <input class = 'classCheck' name="check" type="checkbox" >
                    <p class = 'classTitle' >abc</p>
                    <p class = 'timeRun_P'>倒计时</p>
                    </div>
                    
                    <div class="line-Right">
                        <span class='deletDom'>删除</span>
                        <span class="updateDom">编辑</span>
                </div>
                </li> -->
            </ul>


        </div>

    </div>

    <!-- 弹窗窗部分 -->
    <div class='back_mask' >
        <div class="open-edit">
            <form action="" >
                <input class="input-Title" type="text" placeholder="请输入Title"></input>
                <textarea class="input-contants" name="txtinput" placeholder="请输入提醒具体内容"></textarea>
                <div>
                    请选择提醒时间：<input name ='time' class="input-Time" type="text" placeholder="请选择"></input>
                </div>
                <input  class='update-btn' type="button" value="保存">
            </form>

        </div>
    </div> 
    <!-- 提醒部分 -->

    <div class = 'remind_box'>
        <div class="remind_cont">
            <span class ='myCall_conts'>提醒内容</span>
            <button class = "remind_btn" type="button" >知道了</button>
        </div>	
        <video class = 'videoRun' src="video/myCall.mp3"></video>
    </div>	

    <!-- 自定义删除模板 -->
    <div class='mask_judge' >
        <div class="open_judge">
            <p>确定删除该条提醒吗？</p>
            <div>
                <button class="confirm" type="button">确定</button>
                <button class="cancel"  type="button">取消</button>
            </div>

        </div>
    </div> 
`

