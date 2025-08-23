import React from 'react';

export default function WhyUs() {
	return (
		<section
			style={{
				background: '#17635C',
				padding: '48px 0 56px 0',
				width: '100%',
				minHeight: 340,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<h2
				style={{
					color: '#EFBF04',
					fontFamily: 'Roboto Serif, serif',
					fontWeight: 600,
					fontSize: 36,
					textAlign: 'center',
					marginBottom: 24,
				}}
			>
				Why Choose Bijou Group?
			</h2>
					<div
						style={{
							color: '#fff',
							fontFamily: 'Space Grotesk, sans-serif',
							fontWeight: 400,
							fontSize: 18,
							lineHeight: '28px',
							textAlign: 'center',
							maxWidth: 900,
							margin: '0 auto',
						}}
					>
						<div style={{ marginBottom: 8, fontWeight: 400 }}>
							We started Bijou Relocation because we saw how much time and energy property professionals and landlords were wasting on compliance issues, tenant coordination, and reactive maintenance tasks.<br />
							We knew Sheffield was ready for a property management company that combined local expertise with professional systems.
						</div>
								<div style={{ marginTop: 40, marginBottom: 40, fontWeight: 400 }}>
									By bringing exceptional service standards to HMO management, we created a solution that works:
								</div>
						<ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'inline-block', textAlign: 'left' }}>
							<li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
								<span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: '50%', background: '#EFBF04', marginRight: 10 }}>
									<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M3 6.5L5.2 8.7L9 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</span>
											<span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>
												Stress-free, profitable support for Sheffield landlords
											</span>
							</li>
							<li style={{ display: 'flex', alignItems: 'center' }}>
								<span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: '50%', background: '#EFBF04', marginRight: 10 }}>
									<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M3 6.5L5.2 8.7L9 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</span>
											<span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>
												Professional property management that actually works
											</span>
							</li>
						</ul>
			</div>
		</section>
	);
}
