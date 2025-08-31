import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import styles from './Record.module.css';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

const recordData = [
	{
		highlight: '95%',
		title: 'Client Retention Rate',
		description:
			'Our clients stay with us year after year because we consistently deliver professional fixed rental income solutions and genuine peace of mind.',
		highlightColor: styles.gold,
		highlightExtra: '',
	},
	{
		highlight: '2 Weeks',
		title: 'Average Void Periods',
		description:
			'Extensive tenant network ensures properties are occupied quickly with quality tenants through our proven screening process.',
		highlightColor: styles.gold,
		highlightExtra: '',
	},
	{
		highlight: '24/7',
		title: 'Emergency Response',
		description:
			'Round-the-clock support means happy tenants and protected investments with immediate issue resolution.',
		highlightColor: styles.gold,
		highlightExtra: '',
	},
	{
		highlight: '100%',
		title: 'Compliance Record',
		description:
			'Expert knowledge ensures every property meets all licensing requirements and safety standards without exception.',
		highlightColor: styles.gold,
		highlightExtra: '',
	},
];

const Record: React.FC = () => {
	const headingRef = useRef<HTMLDivElement>(null);
	const gridRef = useRef<HTMLDivElement>(null);
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		let hasAnimatedHeading = false;
		let hasAnimatedCards = false;

		const handleScroll = () => {
			const windowHeight = window.innerHeight;

			// Animate heading when 20% visible
			if (headingRef.current && !hasAnimatedHeading) {
				const rect = headingRef.current.getBoundingClientRect();
				if ((windowHeight - rect.top) / windowHeight > 0.2) {
					hasAnimatedHeading = true;
					animate(headingRef.current, {
						opacity: [0, 1],
						translateY: [30, 0],
						duration: 700,
						easing: 'easeOutCubic',
						complete: () => {
							if (headingRef.current) {
								headingRef.current.style.opacity = '1';
								headingRef.current.style.transform = 'translateY(0)';
							}
						},
					});
				}
			}

			// Animate cards one by one when 30% visible
			if (!hasAnimatedCards && cardRefs.current.length > 0) {
				const firstCard = cardRefs.current[0];
				if (firstCard) {
					const rect = firstCard.getBoundingClientRect();
					if ((windowHeight - rect.top) / windowHeight > 0.3) {
						hasAnimatedCards = true;

						// Animate each card with staggered timing
						cardRefs.current.forEach((cardRef, idx) => {
							if (cardRef) {
								animate(cardRef, {
									opacity: [0, 1],
									scale: [0.9, 1],
									duration: 600,
									delay: idx * 150, // 150ms delay between each card
									easing: 'easeOutCubic',
									complete: () => {
										if (cardRef) {
											cardRef.style.opacity = '1';
											cardRef.style.transform = 'scale(1)';
										}
									},
								});
							}
						});
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		setTimeout(handleScroll, 100); // Initial check
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<SEOHead
				title="Proven Track Record | Bijou Group Sheffield HMO Management"
				description="Discover Bijou Group's proven track record: high client retention, fast tenant placement, 24/7 support, and 100% compliance for Sheffield landlords."
				canonical="https://bijougroup.co.uk/testimonials/track-record"
			/>
			<LocalBusinessSchema
				name="Bijou Group"
				url="https://bijougroup.co.uk/testimonials/track-record"
				address={{
					street: '70 Clarkehouse Road',
					city: 'Sheffield',
					region: 'South Yorkshire',
					postalCode: 'S10 2LJ',
					country: 'UK',
				}}
				phone="+447495747930"
				logo="/logo.svg"
			/>
			<section className={styles.recordSection} aria-label="Proven Track Record">
				<div ref={headingRef} className={`${styles.headingWrap} opacity-0`}>
					<div className={styles.headingDivider} />
					<h2 className={styles.heading}>PROVEN TRACK RECORD</h2>
					<div className={styles.headingDivider} />
				</div>
				<div ref={gridRef} className={styles.recordGrid}>
					{recordData.map((item, idx) => (
						<article
							className={`${styles.recordCard} opacity-0`}
							key={idx}
							ref={(el: HTMLDivElement | null) => {
								cardRefs.current[idx] = el;
							}}
						>
							<div className={styles.cardTitleRow}>
								<span className={styles.highlight + ' ' + item.highlightColor}>{item.highlight}</span>
								<span className={styles.cardTitleText}>{item.title}</span>
							</div>
							<div className={styles.description}>{item.description}</div>
						</article>
					))}
				</div>
			</section>
		</>
	);
};

export default Record;
