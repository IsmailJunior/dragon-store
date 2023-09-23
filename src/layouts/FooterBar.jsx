import {Link} from 'react-router-dom'
export const FooterBar = () => {
return (
<footer className="bg-slate-100 text-gray-500 p-2 lg:p-4 text-right">
	<div className="lg:container text-xs font-light lg:font-normal lg:text-base">
		<section>
			<p>ان المتجر في حالة التطوير قد لاتظهر بعض المزيا او قد تكون هناك بعض الصفحات مفقودة</p>
		</section>
		<hr className="my-5" />
		<section className="flex justify-between">
			{/* Catagories	 */}
			<ul>
				<li>
					<h1 className="text-black">الفئات</h1>
				</li>
				<li>
					<Link to='/store/o'>
					Samsung</Link>
				</li>
				<li>
					<Link to='/store/s'>
					Huawei</Link>
				</li>
				<li>
					<Link to='/store/d'>
					Honor</Link>
				</li>
				<li>
					<Link to='/store/g'>
					Xiaomi</Link>
				</li>
				<li>
					<Link to='/store/v'>
					Oppo</Link>
				</li>
				<li>
					<Link to='/store/w'>
					Itel</Link>
				</li>
				<li>
					<Link to='/store/q'>
					Tecno</Link>
				</li>
				<li>
					<Link to='/store/a'>
					ZTE</Link>
				</li>
				<li>
					<Link to='/store/s'>
					TCL</Link>
				</li>
				<li>
					<Link to='/store/u'>
					Vivo</Link>
				</li>
				<li>
					<Link to='/store/p'>
					Infinix</Link>
				</li>
				<li>
					<Link to='/store/z'>
					Nokia</Link>
				</li>
				<li>
					<Link to='/store/a'>
					Watchs</Link>
				</li>
			</ul>
			{/* Store */ }
			<ul>
				<li>
					<h1 className="text-black">المتجر</h1>
				</li>
				<li>
					<Link to='/store/2'>
					هواتف النقالة</Link>
				</li>
				<li>
					<Link to='/store/1'>
					الهواتف المستخدمة</Link>
				</li>
				<li>
					<Link to='/store/5'>
					الهواتف الجديدة</Link>
				</li>
				<li>
					<Link to='/store/2'>
					الساعات</Link>
				</li>
			</ul>
			{/* Paymenet */}
			<ul>
				<li>
					<h1 className="text-black">طرق الدفع</h1>
				</li>
				<li>
					<Link to='/store/7'>
					زين كاش</Link>
				</li>
				<li>
					<Link to='/store/6'>
					اسيا حوالة</Link>
				</li>
				<li>
					<Link to='/store/5'>
					فيزا</Link>
				</li>
				<li>
					<Link to='/store/4'>
					الدفع المباشر</Link>
				</li>
			</ul>
			{/* Contact */ }
			<ul>
				<li>
					<h1 className="text-black">التواصل</h1>
				</li>
				<li>
					<Link to='/store/d'>
					عن طريق الهاتف</Link>
				</li>
				<li>
					<Link to='/store/d'>
					عن طريق البريد الاكتروني</Link>
				</li>
			</ul>
			{/* Hiring */ }
			<ul>
				<li>
					<h1 className="text-black">الوظائف</h1>
				</li>
				<li>
					<Link to='/store/3'>
					مصمم</Link>	
				</li>
				<li>
					<Link to='/store/2'>
					مدير مبيعات</Link>	
				</li>
				<li>
					<Link to='/store/0'>
					مسوق تجاري</Link>	
				</li>
			</ul>
			{/* About us */}
			<ul>
				<li>
					<h1 className="text-black">حولنا</h1>
				</li>
				<li>
					<Link to='/store/6'>
					فرص عمل</Link>
				</li>
				<li>
					<Link to='/store/0'>
					الاخبار</Link>
				</li>
			</ul>
		</section>
		<hr className="my-5" />
		<section>
			<div className="flex gap-5 lg:gap-20">
				<p>Copyright © 2023 Dragon Group. جميع الحقوق محفوظة</p>
				<div className="text-gray-600">
					<Link to='/store/s'>
					سياسة الخصوصة</Link>
					<span className="mx-3">|</span>
					<Link to='/store/s'>
					دواعي الاستخدام</Link>
					<span className="mx-3">|</span>
					<Link to='/store/s'>
					سياسة الاسترجاع</Link>
					<span className="mx-3">|</span>
					<Link to='/store/s'>
					خريطة الموقع</Link>
				</div>
			</div>
		</section>
	</div>
</footer>
)
}