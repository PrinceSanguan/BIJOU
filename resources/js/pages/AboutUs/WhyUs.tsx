import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
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

const WhyUs: React.FC = () => {
	const titleRef = useRef<HTMLHeadingElement>(null);
	const paragraphRef = useRef<HTMLDivElement>(null);
	const paragraph2Ref = useRef<HTMLDivElement>(null);
	const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);

	useEffect(() => {
		let hasAnimatedTitle = false;
		let hasAnimatedParagraph = false;
		let hasAnimatedParagraph2 = false;
		let hasAnimatedList = false;

		const handleScroll = () => {
			const windowHeight = window.innerHeight;

			if (titleRef.current && !hasAnimatedTitle) {
				const rect = titleRef.current.getBoundingClientRect();
				if ((windowHeight - rect.top) / windowHeight > 0.2) {
					hasAnimatedTitle = true;
					animate(titleRef.current, {
						opacity: [0, 1],
						translateY: [30, 0],
						duration: 700,
						easing: 'easeOutCubic',
						complete: () => {
							titleRef.current!.style.opacity = '1';
							titleRef.current!.style.transform = 'translateY(0)';
						}
					});
				}
			}

			if (paragraphRef.current && !hasAnimatedParagraph) {
				const rect = paragraphRef.current.getBoundingClientRect();
				if ((windowHeight - rect.top) / windowHeight > 0.25) {
					hasAnimatedParagraph = true;
					animate(paragraphRef.current, {
						opacity: [0, 1],
						translateY: [20, 0],
						duration: 600,
						easing: 'easeOutCubic',
						complete: () => {
							paragraphRef.current!.style.opacity = '1';
							paragraphRef.current!.style.transform = 'translateY(0)';
						}
					});
				}
			}

			if (paragraph2Ref.current && !hasAnimatedParagraph2) {
				const rect = paragraph2Ref.current.getBoundingClientRect();
				if ((windowHeight - rect.top) / windowHeight > 0.3) {
					hasAnimatedParagraph2 = true;
					animate(paragraph2Ref.current, {
						opacity: [0, 1],
						translateY: [20, 0],
						duration: 600,
						easing: 'easeOutCubic',
						complete: () => {
							paragraph2Ref.current!.style.opacity = '1';
							paragraph2Ref.current!.style.transform = 'translateY(0)';
						}
					});
				}
			}

			if (!hasAnimatedList) {
				let allVisible = true;
				listItemRefs.current.forEach((li, idx) => {
					if (li) {
						const rect = li.getBoundingClientRect();
						if ((windowHeight - rect.top) / windowHeight > 0.35) {
							animate(li, {
								opacity: [0, 1],
								translateY: [20, 0],
								duration: 500,
								delay: idx * 120,
								easing: 'easeOutCubic',
								complete: () => {
									li.style.opacity = '1';
									li.style.transform = 'translateY(0)';
								}
							});
						} else {
							allVisible = false;
						}
					}
				});
				if (allVisible) hasAnimatedList = true;
			}
		};

		window.addEventListener('scroll', handleScroll);
		setTimeout(handleScroll, 100);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
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
				<h2 ref={titleRef} className={`${styles.title} opacity-0`}>Why Choose Bijou Group?</h2>
				<div className={styles.content}>
					<div ref={paragraphRef} className={`${styles.paragraph} opacity-0`}>
						We started Bijou Relocation because we saw how much time and energy property professionals and landlords were wasting on compliance issues, tenant coordination, and reactive maintenance tasks.<br />
						We knew Sheffield was ready for a property management company that combined local expertise with professional systems.
					</div>
					<div ref={paragraph2Ref} className={`${styles.paragraph2} opacity-0`}>
						By bringing exceptional service standards to HMO management, we created a solution that works:
					</div>
					<ul className={styles.list}>
						{["Stress-free, profitable support for Sheffield landlords", "Professional property management that actually works"].map((text, idx) => (
							<li
								key={idx}
								ref={(el: HTMLLIElement | null) => { listItemRefs.current[idx] = el; }}
								className={`${styles.listItem} opacity-0`}
							>
								<CheckIcon />
								<span className={styles.listText}>{text}</span>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default WhyUs;
