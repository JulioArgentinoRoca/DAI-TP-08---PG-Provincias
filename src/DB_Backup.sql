--
-- PostgreSQL database dump
--

\restrict aChZNFlqeR0lW0ShLSdwaCflJRjhb2koH7WyjSNTngFaAgasacfTBl0odMmlzkW

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-06-23 20:21:34

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16561)
-- Name: provincia; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provincia (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    full_name character varying(255) NOT NULL,
    latitude double precision,
    longitude double precision,
    display_order integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.provincia OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16560)
-- Name: provincia_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.provincia_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.provincia_id_seq OWNER TO postgres;

--
-- TOC entry 5014 (class 0 OID 0)
-- Dependencies: 219
-- Name: provincia_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.provincia_id_seq OWNED BY public.provincia.id;


--
-- TOC entry 4856 (class 2604 OID 16564)
-- Name: provincia id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provincia ALTER COLUMN id SET DEFAULT nextval('public.provincia_id_seq'::regclass);


--
-- TOC entry 5008 (class 0 OID 16561)
-- Dependencies: 220
-- Data for Name: provincia; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provincia (id, name, full_name, latitude, longitude, display_order) FROM stdin;
1	Buenos Aires	Provincia de Buenos Aires	-36.6769	-60.5588	1
2	Catamarca	Provincia de Catamarca	-28.4696	-65.7852	2
3	Chaco	Provincia del Chaco	-26.3864	-60.7653	3
4	Chubut	Provincia del Chubut	-43.3002	-65.1023	4
5	Córdoba	Provincia de Córdoba	-31.4201	-64.1888	5
6	Corrientes	Provincia de Corrientes	-27.4692	-58.8306	6
7	Entre Ríos	Provincia de Entre Ríos	-31.7319	-60.5238	7
8	Formosa	Provincia de Formosa	-26.1775	-58.1781	8
9	Jujuy	Provincia de Jujuy	-24.1858	-65.2995	9
10	La Pampa	Provincia de La Pampa	-36.6167	-64.2833	10
11	La Rioja	Provincia de La Rioja	-29.4131	-66.8558	11
12	Mendoza	Provincia de Mendoza	-32.8895	-68.8458	12
13	Misiones	Provincia de Misiones	-27.3671	-55.8961	13
14	Neuquén	Provincia del Neuquén	-38.9516	-68.0591	14
15	Río Negro	Provincia de Río Negro	-40.8135	-62.9967	15
16	Salta	Provincia de Salta	-24.7829	-65.4232	16
17	San Juan	Provincia de San Juan	-31.5375	-68.5364	17
18	San Luis	Provincia de San Luis	-33.295	-66.3356	18
19	Santa Cruz	Provincia de Santa Cruz	-51.623	-69.2168	19
20	Santa Fe	Provincia de Santa Fe	-31.6333	-60.7	20
21	Santiago del Estero	Provincia de Santiago del Estero	-27.7951	-64.2615	21
22	Tierra del Fuego	Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur	-54.8019	-68.303	22
23	Tucumán	Provincia de Tucumán	-26.8241	-65.2226	23
\.


--
-- TOC entry 5015 (class 0 OID 0)
-- Dependencies: 219
-- Name: provincia_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provincia_id_seq', 23, true);


--
-- TOC entry 4859 (class 2606 OID 16573)
-- Name: provincia provincia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provincia
    ADD CONSTRAINT provincia_pkey PRIMARY KEY (id);


-- Completed on 2026-06-23 20:21:35

--
-- PostgreSQL database dump complete
--

\unrestrict aChZNFlqeR0lW0ShLSdwaCflJRjhb2koH7WyjSNTngFaAgasacfTBl0odMmlzkW

