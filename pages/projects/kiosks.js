import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function MillburnAI() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>School Security Kiosks</h1>
            <p className={utilStyles.lightText}>Superintendent update linked below</p>
            <a href="https://4.files.edl.io/80f1/12/07/22/203049-3948b4a9-47c9-42a4-9be2-0627b3d91db1.pdf" target="_blank">Download PDF</a>
        </Layout>
    );
}