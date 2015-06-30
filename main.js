var main = {
	// --------------
	// 変数宣言
	// --------------

	$btn : $('#btn'),

	// --------------
	// 関数
	// --------------
	init : function(){
			// btnクリック
			main.$btn.on('click',function(){
				alert('クリック！');
			});
	},
};

$(function(){
	main.init();
});