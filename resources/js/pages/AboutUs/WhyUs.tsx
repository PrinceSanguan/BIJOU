
import React from 'react';
import styles from './WhyUs.module.css';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

const CheckIcon: React.FC = () => (
	<span className={styles.check}>
		<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3 6.5L5.2 8.7L9 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	</span>
);

const WhyUs: React.FC = () => (
	<>
		<SEOHead
			title="Why Choose Us | Bijou Group Sheffield"
			description="Why us meta description with CTA and location."
			canonical="https://yourdomain.com/about/why-us"
		/>
		<LocalBusinessSchema
			name="Bijou Group"
			address={{
				street: "70 Clarkehouse Road",
				city: "Sheffield",
				region: "South Yorkshire",
				postalCode: "S10 2LJ",
				country: "England"
			}}
			phone="+447495747930"
			url="https://yourdomain.com"
			logo="/images/Circular logo.png"
		/>
		<section className={styles.section}>
			<h2 className={styles.title}>Why Choose Bijou Group?</h2>
			<div className={styles.content}>
				<div className={styles.paragraph}>
					We started Bijou Relocation because we saw how much time and energy property professionals and landlords were wasting on compliance issues, tenant coordination, and reactive maintenance tasks.<br />
					We knew Sheffield was ready for a property management company that combined local expertise with professional systems.
				</div>
				<div className={styles.paragraph2}>
					By bringing exceptional service standards to HMO management, we created a solution that works:
				</div>
				<ul className={styles.list}>
					<li className={styles.listItem}>
						<CheckIcon />
						<span className={styles.listText}>
							Stress-free, profitable support for Sheffield landlords
						</span>
					</li>
					<li className={styles.listItem}>
						<CheckIcon />
						<span className={styles.listText}>
							Professional property management that actually works
						</span>
					</li>
				</ul>
			</div>
		</section>
	</>
);

export default WhyUs;
